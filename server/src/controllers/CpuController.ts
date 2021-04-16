import { Request, Response } from "express";
import os from "os";
import { ConvertMemory, FormatMemory } from "../utils/ConvertMemory";

class CpuController {
  async ram(request: Request, response: Response) {
    const platform = os.platform();

    const { freemem, totalmem } = os;

    let totalMemory = ConvertMemory({ memory: totalmem(), type: "GB" });
    totalMemory = FormatMemory({ memory: totalMemory });

    let usage_memory = ConvertMemory({ memory: freemem(), type: "GB" });
    usage_memory = FormatMemory({ memory: usage_memory });

    const { model } = os.cpus()[0];

    const use_percent = Number((totalMemory / usage_memory / 100).toFixed(2));

    return response.json({
      platform,
      memory: totalMemory,
      usage_memory,
      use_percent,
      CPU: model,
    });
  }
}

export default new CpuController();
