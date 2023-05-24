import React from 'react'
import Image from 'next/image';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import Express from '../public/assets/skills/express.png';
import Mongo from '../public/assets/skills/mongo.png';
import NodeJs from '../public/assets/skills/node.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import Swift from '../public/assets/skills/swift.png'
import NextJS from '../public/assets/skills/nextjs.png'
import Java from '../public/assets/skills/java.png'
import Hadoop from '../public/assets/skills/hadoop.png';
import Spark from '../public/assets/skills/spark.png'
import Hive from '../public/assets/skills/hive.png'
import Python from '../public/assets/skills/python.png'
import Php from '../public/assets/skills/php.png'
import Csharp from '../public/assets/skills/c.png'
import MySql from '../public/assets/skills/mysql.png'



const Skills = () => {
  return (
    <div id='skills' className='w-full p-20 pl-[55px]'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-8'>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={Html} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>HTML</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={Css} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>CSS</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={Javascript} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>JavaScript</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={Tailwind} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Tailwind</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image  src={Php} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Php</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={Mongo} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>MongoDB</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={Express} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Express</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={ReactImg} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>React</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={NodeJs} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>NodeJS</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={NextJS} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>NextJS</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={Java} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Java</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={Csharp} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>C Sharp</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={Swift} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Swift</h3>
                    </div>
                </div>
                </div>

               

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={Python} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Python</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={MySql} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>MySql</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={Hadoop} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Hadoop</h3>
                    </div>
                </div>
                </div>    
                
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={Spark} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Spark</h3>
                    </div>
                </div>
                </div>    
                
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={Hive} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Hive</h3>
                    </div>
                </div>
                </div>    
                
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={Github} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Github</h3>
                    </div>
                </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills