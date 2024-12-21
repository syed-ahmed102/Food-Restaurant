import Image from "next/image"
import { Card, CardContent, CardHeader } from "./ui/Card"
import CoffeeBanner from "./Coffe-banner"
import QualityMaintain from "./QualityMaintain"
import EmailForm from "./Email-form"
import Services24x7 from "./Services24x7"
import BlogPostCard from "./BlogPostCard"
import FreshFoodIcon from "./FreshFood"
import { ShowMoreButton, WatchVideoButton } from "./ActionButton"
import BlogCard from "./BlogCard"
import ReadMoreButton from "./button"

export default function ChefProfileCard() {
  return (
    <>
    <div></div>
    <Card className="max-w-sm overflow-hidden">
      <div className="relative aspect-square overflow-hidden">
        <Image
          alt="Chef preparing food in kitchen"
          className="object-cover"
          height={300}
          src="/pic2.png"
          style={{
            aspectRatio: "300/300",
            objectFit: "cover",
          }}
          width={600} />
      </div>


      <CardHeader>
        <h3 className="text-xl font-semibold text-center">Bulbul Hassan</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground text-center">Chef</p>
      </CardContent>
    </Card>
    <br />
    <br />

    <CoffeeBanner />

    <br/>
    <br/>
    

    <Card className="max-w-sm overflow-hidden">
      <div className="relative aspect-square overflow-hidden">
        <Image
          alt="Chef preparing food in kitchen"
          className="object-cover"
          height={300}
          src="/pic3.png"
          style={{
            aspectRatio: "200/300",
            objectFit: "cover",
          }}
          width={600} />
      </div>


      <CardHeader>
        <h3 className="text-xl font-semibold text-center">Tahmina Rumi</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground text-center">Chef</p>
      </CardContent>
    </Card>
    <br/>
    <br/>
    <EmailForm />
    <br/>
    <br/>
    <QualityMaintain />

    <br/>
    <br/>

    
    <Card className="max-w-sm overflow-hidden">
      <div className="relative aspect-square overflow-hidden">
        <Image
          alt="Chef preparing food in kitchen"
          className="object-cover"
          height={300}
          src="/pic2.png"
          style={{
            aspectRatio: "200/300",
            objectFit: "cover",
          }}
          width={600} />
      </div>


      <CardHeader>
        <h3 className="text-xl font-semibold text-center">Mark Henry</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground text-center">Chef</p>
      </CardContent>
    </Card>

    <br/>
    <br/>

    <Card className="max-w-sm overflow-hidden">
      <div className="relative aspect-square overflow-hidden">
        <Image
          alt="Chef preparing food in kitchen"
          className="object-cover"
          height={300}
          src="/pic5.png"
          style={{
            aspectRatio: "300/300",
            objectFit: "cover",
          }}
          width={600} />
      </div>


      <CardHeader>
        <h3 className="text-xl font-semibold text-center">Grand Italiano</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground text-center">26 items</p>
      </CardContent>
    </Card>
    <br/>
    <br/>
    <Services24x7 />
    <br/>
    <br/>
    <BlogPostCard date={""} commentCount={0} slug={""} fill={""}/>
    <br/>
    <br/>
    <FreshFoodIcon />
    <br/>
    <br/>
    <ShowMoreButton /><WatchVideoButton />
    <br/>
    <br/>
    <BlogCard title={""} description={""} date={""} author={""} imageUrl={""} category={""} slug={""} />
    <br/>
    <br/>
    <ReadMoreButton />
    <br/>
    <br/>
    
      <CardHeader>
        <h3 className="text-xl text-start text-bg #FF9F0D">Raw Scollops From Erquy   ___________________  32$</h3>
        <p className="text-md text-muted-foreground text-start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Varius sed pharetra dictum neque massa congue</p>
      </CardHeader>
    <br/>
    <br/>
    <BlogCard title={""} description={""} date={""} author={""} imageUrl={""} category={""} slug={""} />
        <br/>
        <br/>
    <ReadMoreButton/>
    <br/>
    <br/>
    <CoffeeBanner/>
    <br/>
    <br/>
    <BlogPostCard date={""} commentCount={0} slug={""} fill={""}/>




        </>

    
  )
}

