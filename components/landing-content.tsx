"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Ali M.",
    avatar: "A",
    title: "Software Engineer",
    description: "This application showcase my skills. in this project I used: React.js, Next.js 14, Tailwind, Prisma, MySQL, Javascript, TypeScript, HTML5, CSS3, and more!"
  },
  {
    name: "Baydaa O.",
    avatar: "B",
    title: "UI/UX Designer",
    description: "BrainerAI is incredible! My husband, the genius behind it, told me to say this. Honestly, I have no idea what it does, but he's convinced it's changing the world. 😄 #LoveYouBot",
  },
  {
    name: "Yaman N.",
    avatar: "Y",
    title: "Dog Owner",
    description: "BrainerAI is hands down the most powerful project I've ever seen! Ali didn't even ask for permission to review, but I'd say it's pretty impressive. 💻🚀 #YamanOff",
  },
  {
    name: "Tareq Z.",
    avatar: "T",
    title: "Socks Owner",
    description: "BrainerAI sounds interesting. As soon as my socks appear 😂🧦, I'll dive into it and maybe genrates some anime backgrounds. #SocksSearcher",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}