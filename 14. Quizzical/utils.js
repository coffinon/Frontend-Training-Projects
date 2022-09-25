// Helper function for array shuffling
export default function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}