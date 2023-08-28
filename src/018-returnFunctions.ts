(()=>{
// probando funciones que retornen
const calcTotal = (price: number[]): number => {
  const total = price.reduce((acumulator, value) => acumulator + value, 0);
  return total;
}
const printTotal = (): void=>{
  const totalVentas = calcTotal([1,2,3,4,5]);
  console.log(totalVentas);
}
  printTotal();
})()
