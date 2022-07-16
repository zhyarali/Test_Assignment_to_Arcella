
import {useState} from 'react'
import postImage  from "./assets/img/img.png"
import ReduceFont  from "./assets/img/reduce-font-size.png"
import IncreaseFont  from "./assets/img/increase-font-size.png"
import NormalFont  from "./assets/img/text.png"

function App() {

  const [reading_mode,setReadingMode]=useState(false)

  const handleReadingMode=()=>{
    setReadingMode(v=>!v)
  }


  return (
   
    <div className="home">
      <div className="container">


      {
        reading_mode ? '' :

        <div>
        <div className="row">
          <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
        </div>

        <div className="row d-flex chips">
          <p className="chip">Lorem</p>
          <p className="chip">Lorem Lorem</p>
          <p className="chip">Loremmm</p>
        </div>


        <div className="image">
          <img src={postImage} alt="post_image" width="100%"></img>
        </div>

  </div>

  }


          <div className="info d-flex justify-between align-center ">

              <div className="time d-flex">
                <div className="icon">
                  <i className="far fa-clock "></i>
                </div>
                <p>2022-06-18 23:17</p>
              </div>


              <div className="share_text d-flex align-center">

                  <div className="share">
                    <button className="d-flex align-center">
                        <i className="fa fa-share-alt"></i>
                        <span>Share</span>
                    </button>
                  </div>

                  <div className="font d-flex ">
                    <a onClick={handleReadingMode} className="item d-flex read-mode-btn align-center">
                       <i className="far fa-file-alt"></i>

                       {
                        reading_mode ? 
                        <span>Disable reading mode</span>
                        :
                        <span>Enable reading mode</span>
                       }
                       
                       
                      </a>
                    <div className="item divider"></div>

                    <a className="btn-font-size"><img className="item" src={ReduceFont} alt="reduce-font-size-icon" width="15px"></img></a>
                    <a className="btn-font-size normal-font"><img className="item" src={NormalFont} alt="text-icon" width="12px"></img></a>
                    <a className="btn-font-size"><img className="item" src={IncreaseFont} alt="increase-font-size-icon" width="15px"></img></a>

                    
                  </div>

              </div>
              
          </div>




         {
          reading_mode ?
            <div className="row title_reading_mode">
              <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
            </div>
           : ''
         }



          <div className="decription">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, fugit consequatur? Quos numquam exercitationem ex eum ad, cumque vel. Excepturi, beatae quo nesciunt voluptas architecto reprehenderit voluptatem dignissimos nobis libero magni voluptatibus expedita quam distinctio temporibus doloremque consectetur aut numquam corrupti blanditiis voluptate. Id aut facilis autem repellendus non atque officia, illo iusto enim maxime error amet ab ut itaque fugit nemo temporibus in sequi facere recusandae qui velit? Unde tempora et, minima quos aperiam, quo in enim maiores soluta sunt id eveniet quidem eos, laudantium tenetur delectus repudiandae expedita labore. Ut dicta eveniet nulla iusto tenetur possimus repellat inventore provident aliquid ipsa culpa perspiciatis expedita atque consequatur totam repudiandae blanditiis exercitationem, minima rerum fugiat? Sint soluta, nulla aperiam quo debitis, deleniti non nobis, veniam repellendus accusantium hic similique tenetur dignissimos odit? Natus facere, doloremque consequuntur amet impedit architecto quasi accusantium. Doloribus vel repudiandae maiores sapiente debitis placeat aut eveniet porro, voluptatum doloremque quisquam mollitia aspernatur saepe, explicabo, quidem asperiores quaerat quae dicta assumenda! Ex perspiciatis voluptate necessitatibus beatae optio illo, reiciendis eum fugit laudantium debitis ipsa. Incidunt voluptatibus culpa, maiores voluptas doloribus quas! Praesentium voluptatem, dicta quae, a explicabo sint cumque corporis, nisi voluptate quis cupiditate quia voluptas iusto consequuntur accusantium numquam expedita laborum voluptates nobis facilis perspiciatis optio qui! Harum, qui. Mollitia expedita iusto ipsa ad veritatis perspiciatis cumque corrupti hic omnis non enim doloribus, vitae, optio perferendis consequuntur adipisci maiores labore ipsam praesentium ducimus officia, illum autem eaque quae. Non nulla sunt eveniet sit velit, facilis veritatis esse nihil excepturi vitae dolorum suscipit, totam nesciunt dolore minima consectetur adipisci aliquam impedit odit rerum, sed tenetur perspiciatis at? Fugiat ea sit at, perspiciatis in voluptate distinctio earum explicabo beatae error excepturi consectetur, a eum itaque labore iusto illum placeat dicta ex possimus molestias! Explicabo in recusandae quibusdam provident delectus facere sit architecto harum accusamus corporis necessitatibus molestias quis ullam saepe deserunt tempora praesentium sed ipsum, est numquam omnis voluptatibus ut! Quis labore amet eaque voluptatem iste impedit magnam, maxime optio. Facere quisquam a molestias, libero voluptate cumque! Suscipit, rerum sequi amet, atque ea neque, possimus repudiandae error ipsum nesciunt doloremque tenetur vel illum eligendi eos corporis? Ratione, quo omnis modi reprehenderit quod, provident aliquam iusto facere dolorem, perferendis amet. Nemo odio, quaerat labore vitae accusamus dolor temporibus dolorum consequuntur consequatur culpa quasi sequi natus et commodi quam doloribus fugit amet vero corrupti repellendus error voluptates, accusantium eaque repudiandae?
            </p>
          </div>

      </div>
  </div>
    

  );
}

export default App;
