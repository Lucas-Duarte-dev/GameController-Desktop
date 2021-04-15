interface MemoryProps {
  memory: number;
  type: "KB" | "MB" | "GB";
}

interface FormatMemoryProps {
  memory: number;
}

function ConvertMemory({ memory, type }: MemoryProps): number {
  if (type === "KB") {
    return memory / 1024;
  } else if (type === "MB") {
    return memory / 1024 / 1024;
  } else {
    return memory / 1024 / 1024 / 1024;
  }
}

function FormatMemory({ memory }: FormatMemoryProps): number {
  let convertMem = Number(memory.toFixed(2));
  return (convertMem = convertMem % 1024);
}

export { ConvertMemory, FormatMemory };
