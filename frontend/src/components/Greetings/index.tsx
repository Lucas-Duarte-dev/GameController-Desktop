import React, { useEffect, useState } from 'react'
import os from 'os'

import { Container} from './styles'
import { Convert, RamPercent } from '../../utils/convert';

interface Ram {
  percentsMemory: string | number;
  totalMemory: string | number;
  freeMemory: string | number;

}

const Greetings: React.FC = () => {
  const [ram, setRam] = useState<Ram>({} as Ram);

  useEffect(() => {
   function getInfoRam()  {
      const {freemem, totalmem} = os;

      const totalMemory = Convert({ram: Number(totalmem), type: 'GB'}).toFixed(2)
      const freeMemory = Convert({ram: Number(freemem), type: 'GB'}).toFixed(2)

      const percentsMemory = RamPercent({freeMemory: Number(freemem), totalMemory: Number(totalmem),}).toFixed(2)

      setRam({totalMemory, freeMemory, percentsMemory});
    }
    getInfoRam();
  }, [ram]);

  return (
    <Container>
      <div>{ram?.totalMemory} GB</div>  
      <div>{ram?.freeMemory} GB</div>
      <div>{ram?.percentsMemory}%</div>
    </Container>
  )
}

export default Greetings
