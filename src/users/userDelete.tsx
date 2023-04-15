import React from 'react'
import Button from '../components/button/button';
import { UserDeleteProps } from './userTypes';

const UserDelete = (props:UserDeleteProps) => {
    const { closeAction, saveAction, contnetText } = props;
    return (
          <div className="flex justify-center rounded-xl items-center p-6 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative m-6 flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex justify-between p-5 border-b border-solid border-gray-300 rounded-t  dark:bg-gray-700">
                  <h3 className="text-3xl text-red-500 font-semibold">Delete confirmation</h3>
                  <button
                    className="bg-transparent border-0 text-black justify-center items-center float-right"
                    onClick={() => closeAction()}
                  >
                    <span className=" opacity-7  text-red-900 text-xl font-bold text-center">
                      x
                    </span>
                  </button>
                </div>
                    <div className='flex items-center h-28 w-full dark:bg-gray-700 '>
                        <h1 className='text-2xl text-rose-500 m-2 text-center dark:bg-gray-700'>
                            {contnetText}
                        </h1>
                    </div>
                <div className="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b dark:bg-gray-700">
                  <Button label='No' clickAction={()=>closeAction()} />
                  <Button label='Yes' clickAction={()=>saveAction()} type='danger' />
                </div>
              </div>
            </div>
          </div>
    )
}
export default UserDelete;
