export function backgroundParallaxe(
  setter: (state: { x: number; y: number }) => void
) {
  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    const x = clientX / window.innerWidth;
    const y = clientY / window.innerHeight;
    setter({ x: x * 40, y: y * 7 });
  };
  window.addEventListener("mousemove", handleMouseMove);
  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}

export function whileNumbers(nb: number): { value: number; text: string }[] {
  let array = [];
  for (let i = 1; i <= nb; i++) {
    let entity = i === 1 ? "Personne" : "Personnes";
    array.push({ value: i, text: `${i} ${entity}` });
  }
  return array;
}

export function numberOfNight(startDate: Date, endDate: Date): number {
  if (startDate && endDate) {
    const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return daysDiff - 1;
  }
  return 0;
}
