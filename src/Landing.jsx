import './assets/landing.css';
import { ThemeContext } from './Context/ThemeContext';

const Landing = () => {
   
    return ( 
        <ThemeContext.Consumer>{(context)=>{
            const { isLightTheme, light, dark} = context;
            const theme = isLightTheme ? light : dark ;
        
            return ( 
    
        <div className="landing"   style={{ background: theme.ui, color: theme.syntax}}>

        <div className="container">
        <div className="level-1">
            <h4>I'M</h4>
            <h1>VICTOR MONDERU</h1>
            <h2>Full Stack Developer</h2>
        </div>
        <div className="level-2">
            <div className="user-image">
                <img src="profilepic.jpg" alt="" /> 
            </div>
           
            <div className="about">
                <h2 className="about-heading">ABOUT ME </h2>
                <p className="about-details">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Perferendis sint adipisci doloribus a nisi! Facilis obcaecati, 
                     veritatis, voluptatem iure provident quia eius vitae aperiam expedita amet illum fugit, 
                     voluptas quisquam.
                </p>
                <button className='resume-btn'>RESUME</button>
            </div>
        </div>
        <div className="level-3">
          <div className="top-section">
            <h2>PORTFOLIO</h2>
          </div>
          <div className="projects-section">
<div className="project-infor">
    <h3>Ecommerce Store</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio repudiandae, totam voluptates facere dolor sed vel alias dignissimos impedit. Autem esse necessitatibus expedita exercitationem, at molestias quisquam. 
        Magni, quos nemo.</p>
        <button className="btn">
      <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
        <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
        <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
      </svg>
      <span>read more</span>
    </button>
</div>

<div className="project-image">
<img src="Ecommerce.png" alt="Ecommerce.png" />
</div>

<div className="project-image">
    <img src="Health-app.png" alt="Health-app.png" />
</div>
<div className="project-infor">  
    <h3>Health App</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio repudiandae, totam voluptates facere dolor sed vel alias dignissimos impedit. Autem esse necessitatibus expedita exercitationem, at molestias quisquam. 
        Magni, quos nemo.</p>
        <button className="btn">
      <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
        <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
        <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
      </svg>
      <span>read more</span>
    </button>
</div>


<div className="project-infor">
    <h3>Parking Payment </h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio repudiandae, totam voluptates facere dolor sed vel alias dignissimos impedit. Autem esse necessitatibus expedita exercitationem, at molestias quisquam. 
        Magni, quos nemo.</p>
        <button className="btn">
      <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
        <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
        <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
      </svg>
      <span>read more</span>
    </button>
</div>

<div className="project-image">
    
</div>

<div className="project-image">
    
</div>
<div className="project-infor">
    <h3>Ecommerce Store</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio repudiandae, totam voluptates facere dolor sed vel alias dignissimos impedit. Autem esse necessitatibus expedita exercitationem, at molestias quisquam. 
        Magni, quos nemo.</p>
        <button>read more</button>
</div>

          </div>
        </div>
        <div className="level-4">
            <div className="top-section">
                <h2>SERVICES</h2>
            </div>
            <div className="services-section">
<div className="services-description">

</div>
<div className="services-description">
    
</div>
<div className="services-description">
    
</div>
<div className="services-description">
    
</div>
            </div>
        </div>
        <div className="languages">

        </div>
        

        </div>
       
        </div>
         )
        }}
        </ThemeContext.Consumer>
     );
       
}
 
export default Landing;