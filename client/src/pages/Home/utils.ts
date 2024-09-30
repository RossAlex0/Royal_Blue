export function backgroundParallaxe(setter: any) {
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

export function whileNumbers(nb: number) {
  let array = [];
  for (let i = 2; i <= nb; i++) {
    array.push(`${i} personnes`);
  }
  return array;
}
