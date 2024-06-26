import { Module } from 'module';
import React, { useState } from 'react';
import ModuleBox from './module-box';

const Switch = ({ title, onChange, isOn = false }: { title: string, isOn?: Boolean, onChange?: (state: boolean) => void }) => {

    return <ModuleBox clickable>
        <div onClick={() => onChange?.(!isOn)} className='flex justify-between w-full'>
            <span className="text-gray-700 font-semibold">{title}</span>
            <div
                className={`w-10 h-6 bg-gray-400 rounded-full relative transition-all duration-300 ${isOn ? 'bg-green-500' : ''
                    }`}
            >
                <div
                    className={`w-4 h-4 bg-white rounded-full absolute top-1 left-1 transition-all duration-300 ${isOn ? 'translate-x-5' : ''
                        }`}
                ></div>
            </div>
        </div>
    </ModuleBox>
};

export default Switch;