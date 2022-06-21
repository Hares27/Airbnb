import React from "react";
import Banner from "./Banner.js"
import Card from "./Card.js";
import "./Styles/home.css";


const Home=()=>
{
  return(
    <div className="home">
      <Banner/>
      <div className="home-section">
        <Card
        src="https://images.unsplash.com/photo-1614649024145-7f847b1c803f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWlyYm5ifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        title="Online Experiences"
        description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
        src="https://images.unsplash.com/photo-1553444836-bc6c8d340ba7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyYm5ifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        title="Unique stays"
        description="Spaces that are more than just a place to sleep."
        />
        <Card
        src="https://images.unsplash.com/photo-1614649024145-7f847b1c803f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWlyYm5ifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        title="Entire homes"
        description="Comfortable private places, with room for friends or family."
        />
        

      </div>
      <div className='home-section'>
            <Card
                src="https://media.istockphoto.com/photos/modern-family-villa-picture-id1322138245?b=1&k=20&m=1322138245&s=170667a&w=0&h=IriY2gS9ySGUL-km9OZYf9rIZI-1_GHRZbYUnHomxzA="
                title="3 Bedroom Flat in Bournemouth"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="£130/night"
            />
            <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Penthouse in London"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="£350/night"
            />
            <Card
                src="https://media.istockphoto.com/photos/mediterranean-style-villa-with-pool-and-garden-picture-id1291907909?b=1&k=20&m=1291907909&s=170667a&w=0&h=vkU_hEFd1tsbESsWMYqAdjzwpPZEKSj-aR5JrfyXVrQ="
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="£70/night"
            />
            </div>
    
    </div>

  )
}
export default Home;