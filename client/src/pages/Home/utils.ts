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
