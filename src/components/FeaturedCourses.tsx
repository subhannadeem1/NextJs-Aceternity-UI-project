'use client'
import Link from "next/link"
import courseData from "../data/music_courses.json"
import { BackgroundGradient } from "./ui/background-gradient"
import { Button } from '@mantine/core';
console.log(courseData);
interface courses{
    id: number,
        title: string,
        slug: string,
        description: string,
        price: number,
        instructor: "John Doe",
        isFeatured: boolean,
        
}

const FeaturedCourses = () => {
    const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured)

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold
            tracking-wide uppercase">Featured Courses</h2>
            <p className="mt-2 text-3xl leading-8font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
        </div>
      </div>
      
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2
        lg:grid-cols-3 gap-8 justify-center">
            {featuredCourses.map((course:Course)=> (
               <div key={course.id} className="flex justify-center">
                <BackgroundGradient 
                className="flex flex-col rounded-[22px]
                bg-white dark:bg-zinc-900
                overflow-hidden h-full max-w-sm">
                    <div className="p-4 sm:p-6 flex flex-col
                    items-center text-center flex-grow">
                        <p className="text-lg
                        sm:text-xl text-black mt-4
                        mb-2 dark:text-neutral-200
                        ">{course.title}</p>
                        <p className="text-sm
                        text-neutral-500 dark:text-neutral-400
                        text-grow">{course.description}</p>
                        
                        <br/>
                       
                        <Link href={"/courses"} 
                        >
                          <Button
      variant="gradient"
      gradient={{ from: 'violet', to: 'cyan', deg: 90 }}
    >
      Learn More
    </Button>
                            </Link>
                        </div>
                </BackgroundGradient>
               </div> 
               
            ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <Link href={"/courses"}>
        <Button size="md"
      variant="gradient"
      gradient={{ from: 'violet', to: 'gray', deg: 90 }}

    >
      view all courses
    </Button>
        
        </Link>
      </div>

      

    </div>
  )
}

export default FeaturedCourses
