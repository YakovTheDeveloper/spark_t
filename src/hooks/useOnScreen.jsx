import { useEffect, useMemo, useState } from 'react';

export default function useOnScreen(ref, options = {}) {
	const [isIntersecting, setIntersecting] = useState(false);

	const observer = useMemo(
		() => new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting), options),
		[ref],
	);

	useEffect(() => {
		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return isIntersecting;
}
