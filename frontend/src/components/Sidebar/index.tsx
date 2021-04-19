import React, { useEffect, useState } from 'react';
import { Container } from './style';
import os from 'os';


interface SystemInfo {
    platform: NodeJS.Platform,
    ram: number | string,
    cpu: Array<{
        name: string,
        hz: string | undefined,
    }>
}

const Sidebar: React.FC = () => {
    const [systemInfo, setSystemInfo] = useState<SystemInfo>({} as SystemInfo);

    useEffect(() => {
        const {cpus, totalmem, platform} = os;
        const system = platform()
        const { model } = cpus()[0];

        const ram = totalmem() / 1024 / 1024 / 1024;

        const divisorModel = model.split('');

        const name = divisorModel[0];
        const hz = divisorModel.shift();

        setSystemInfo({
            ram,
            platform: system,
            cpu: [{name, hz}]
        })

    }, [])

    return (
        <Container> 
            <div>
                <header>{systemInfo.platform}</header>
                <div>{systemInfo.ram}</div>
            </div>

        </Container> 
    )
};


export default  Sidebar;