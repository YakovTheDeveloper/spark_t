export const assignRefs =
    (...refs) =>
        (element) => {
            refs.forEach((ref) => {
                if (typeof ref === 'function') {
                    ref(element);
                } else if (ref != null) {
                    ref.current = element;
                }
            });
        };
