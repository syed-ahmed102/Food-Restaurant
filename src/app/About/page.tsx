"use client";

import React from 'react';
import Image from 'next/image';
import { Star, Coffee, ChefHat, User } from 'lucide-react';
import { Card, CardContent } from "@/app/Components/ui/Card";

export default function AboutPage() {
  return (
    <div>

      {/* Restaurant Info Section */}
      <section className="py-12">
        <div className="bg-white/10 p-3 rounded-lg">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-58 md:w-1/3">
              <Image
                src="/pic 1b.png"
                alt="Restaurant dish"
                width={100}
                height={100}
                className="rounded-sm object-cover"
              />
              <div className="mt-4">
                <h3 className="font-semibold">Chicken Tikka Kabab</h3>
                <p className="text-gray-600">Last order</p>
                <div className="flex items-center mt-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1">4.5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Card className="max-w-sm overflow-hidden">
      <div className="relative aspect-square overflow-hidden">
        <Image
          alt="Chef preparing food in kitchen"
          className="object-cover"
          height={150}
          src="/Mask Group.png"
          style={{
            aspectRatio: "300/300",
            objectFit: "cover",
          }}
          width={600} />
      </div>


      
        <h3 className="text-xl font-semibold text-start">Fresh Lime</h3>
      <CardContent>
        <p className="text-lg text-start text-#FF9F0D">$38.00</p>
      </CardContent>
    </Card>

      {/* Testimonials Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What our clients are saying</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                    <Image
                      src="/Ellipse 6.png"
                      alt="Client"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis elementum elit. 
                    Suspendisse potenti. Sed ultricies eros a nibh suscipit, vitae porttitor justo tempus.
                  </p>
                  <div className="flex items-center justify-center gap-1">
                    {[1, 2, 3, 4].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                    <Star className="h-5 w-5 text-yellow-400" />
                  </div>
                  <h4 className="font-semibold mt-2">Ahsimi Helen</h4>
                  <p className="text-gray-500 text-sm">Food Specialist</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <form>
      </form>

      {/* Features Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<User className="h-8 w-8" />}
              title="Clean Environment"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis elementum elit."
            />
            <FeatureCard
              icon={<Coffee className="h-8 w-8" />}
              title="120 Item food"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis elementum elit."
            />
            <FeatureCard
              icon={<ChefHat className="h-8 w-8" />}
              title="Best Chef"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis elementum elit."
            />
            </div>
        </div>
      </section>
      <div className="min-h-screen">
      <section className="relative w-full h-[300px] bg-black/90">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-4">Our Menu</h1>
          <div className="absolute bottom-0 right-0 w-1/3">
          </div>
        </div>
      </section>
      </div>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">How we serve food?</h2>
          <div className="max-w-2xl">
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed quis velit ultrices 
              suscipit tempus sed mauris. Vivamus eget diam blandit, tempus sem vitae, 
              facilisis sem. Sed eleifend lorem massa.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="flex flex-col items-center text-center p-6">
    <div className="mb-4">
      {icon}
    </div>
    <h3 className="font-semibold text-xl mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);