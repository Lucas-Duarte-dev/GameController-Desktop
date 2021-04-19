
interface ConvertProps {
    ram: number;
    type: 'KB' | 'MB' | 'GB'
}

interface RamPercentProps {
    totalMemory: number;
    freeMemory: number;

}

const Convert = ({ram, type}: ConvertProps) => {
    if(type === 'KB') {
        return ram / 1024;
    } else if(type === 'MB') {
        return ram / 1024 / 1024; 
    } else {
        return ram / 1024 / 1024 / 1024; 
    }
}

const RamPercent = ({totalMemory, freeMemory}: RamPercentProps) => {
    const total = Convert({ram: totalMemory, type: 'MB' })
    const free = Convert({ram: freeMemory, type: 'MB' })

    return (free / total) * 100
}

export {Convert, RamPercent};