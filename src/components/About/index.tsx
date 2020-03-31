import React from 'react'

// Если понадобится использовать пропсы или стейт то структуру
// которую они будут иметь можно описывать здесь
interface IProps {
    opts?: string
}

// Для классовых комп-ов
// interface IState {
//     opts?: string
// }

export const About: React.FC<IProps> = () => {
    return (
    <div>
        <div>
            <h2>About app:</h2>
            Application was developed especially for training TypeScript.
        </div>

        <div>
            <h2>Version:</h2>
            1.0.3
        </div>

        <div>
            <h2>App Creator:</h2>
            codefvcker
        </div>

        <div className="Footer">
            ® All rights reserved
        </div>
    </div>
);
}
