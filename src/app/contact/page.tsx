"use client";

import React from 'react';
import { Button } from '../Components/ui/button';
import { Input } from '../Components/ui/input';
import { Textarea } from "@/app/Components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/Components/ui/select";

export default function ContactPage() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Contact Form */}
          <div className="space-y-4">
            <Input 
              placeholder="First address" 
              className="w-full"
            />
            <Input 
              placeholder="Your Phone"
              className="w-full"
            />
            <Input 
              type="email"
              placeholder="Your Email Address"
              className="w-full"
            />
            <Input 
              placeholder="Your Address"
              className="w-full"
            />
            <Textarea 
              placeholder="Notes (for orders)"
              className="w-full min-h-[100px]"
            />
            <Button 
              variant="outline"
              className="w-full"
            >
              Add New Address
            </Button>
            
            <div className="flex gap-4">
              <Button 
                variant="default"
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                Continue Shopping
              </Button>
              <Button 
                variant="default"
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                Place Order
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Input 
                placeholder="Search..."
                className="flex-1"
              />
              <Button variant="default" className="bg-gray-800">
                <SearchIcon className="h-4 w-4" />
              </Button>
            </div>

            <Input 
              placeholder="Enter note code"
              className="w-full"
            />
            <Button 
              variant="default"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white"
            >
              Apply
            </Button>

            <div className="flex gap-4">
              <Button 
                variant="default"
                className="bg-orange-500 hover:bg-orange-600 text-white flex-1"
              >
                Update Cart
              </Button>
              <Button 
                variant="default"
                className="bg-orange-500 hover:bg-orange-600 text-white flex-1"
              >
                Continue Shopping
              </Button>
            </div>

            <Button 
              variant="default"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white"
            >
              Proceed to checkout
            </Button>
          </div>

          {/* Right Column - Summary */}
          <div className="space-y-4 p-6 border rounded-lg">
            <Input 
              placeholder="First name"
              className="w-full"
            />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Field name" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="field1" className='bg-white'>Field 1</SelectItem>
                <SelectItem value="field2" className='bg-white'>Field 2</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Choose site" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="site1" className='bg-white'>Site 1</SelectItem>
                <SelectItem value="site2" className='bg-white'>Site 2</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex justify-between items-center mt-8">
              <Button variant="outline">
                Back to cart
              </Button>
              <Button variant="outline">
                Proceed to shipping
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SearchIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);