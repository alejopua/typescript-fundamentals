(()=>{
    const calTotal = (dates: number[]): string => {
        const summary = dates.reduce((total, value) => total + value, 0);
        return summary.toString();
    }

    const printDates = (dates: number[]): void => {
        console.log(`Total is: ${calTotal(dates)}`);
    }
    
    printDates([1,2,3,4,5]);
})();