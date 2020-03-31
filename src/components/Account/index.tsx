import React from 'react'

interface IProps {
    props?: string
}

export const Account: React.FC<IProps> = () => {
    return (
        <div>
            Account: {localStorage.getItem('authUser')}
        </div>
    )
}
