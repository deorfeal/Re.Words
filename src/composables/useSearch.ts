// composables/useSearch.ts
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { useWordsStore } from '@/stores/wordsStore';
import { useSearchStore } from '@/stores/searchStore';
import type { DocumentData } from 'firebase/firestore';

export function useSearch() {
  const wordsStore = useWordsStore();
  const searchStore = useSearchStore();
  const router = useRouter();

  const searchValue = ref<string>('');
  const isOpen = ref(false);
  const dropdownRef = ref<HTMLElement | null>(null);

  const filteredWords = computed(() => {
    const search = searchValue.value.trim().toLowerCase();

    const expandedWords = wordsStore.wordsList.flatMap(word => {
      const activeDirections: DocumentData[] = Object.entries(word.directions)
        .filter(([_, isActive]) => isActive)
        .map(([directionName]) => ({ ...word, direction: directionName }));

      return activeDirections;
    });

    if (!search) return expandedWords;

    return expandedWords.filter(word =>
      word.word.toLowerCase().includes(search) ||
      word.category.toLowerCase().includes(search) ||
      word.direction.toLowerCase().includes(search)
    );
  });

  const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
      isOpen.value = false;
    }
  };

  const handleSubmit = () => {
    console.log('Search value:', searchValue.value);
  };

  const handleWordClick = (word: DocumentData) => {
    searchStore.setWord(word);
    router.push(`/words/${encodeURIComponent(word.direction)}`);
  };

  onMounted(() => {
    document.addEventListener('click', handleOutsideClick);
  });

  onBeforeUnmount(() => {
    document.removeEventListener('click', handleOutsideClick);
  });

  return {
    searchValue,
    filteredWords,
    isOpen,
    dropdownRef,
    toggleDropdown,
    handleSubmit,
    handleWordClick,
  };
}
