<template>
  <div class="home">
      <div class="container">

      <div v-if="reading_mode==false">
          <div class="row">
            <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
          </div>

          <div class="row d-flex chips">
            <p class="chip">Lorem</p>
            <p class="chip">Lorem Lorem</p>
            <p class="chip">Loremmm</p>
          </div>


          <div class="image">
            <img src="@/assets/img/img.png" alt="post_image" width="100%">
          </div>

    </div>

<!-- about post  -->

          <div class="info d-flex justify-between align-center ">

              <div class="time d-flex">
                <div class="icon">
                  <i class="far fa-clock "></i>
                </div>
                <p>2022-06-18 23:17</p>
              </div>

<!-- share and text -->
              <div class="share_text d-flex align-center">

                  <div class="share">
                    <button class="d-flex align-center">
                        <i class="fa fa-share-alt"></i>
                        <span>Share</span>
                    </button>
                  </div>

                  <div class="font d-flex ">
                    <a @click="enable_reading_mode()" class="item d-flex read-mode-btn align-center">
                       <i class="far fa-file-alt"></i>
                        <span v-if="reading_mode">Disable reading mode</span>
                        <span v-else>Enable reading mode</span>
                      </a>
                    <div class="item divider"></div>

                    <a class="btn-font-size"><img class="item" src="@/assets/img/reduce-font-size.png" alt="reduce-font-size-icon" width="15px"></a>
                    <a class="btn-font-size normal-font"><img class="item" src="@/assets/img/text.png" alt="text-icon" width="12px"></a>
                    <a class="btn-font-size"><img class="item" src="@/assets/img/increase-font-size.png" alt="increase-font-size-icon" width="15px"></a>

                    
                  </div>

              </div>
              
          </div>




          <!-- paragraph or description of the post -->

          <div class="row title_reading_mode" v-if="reading_mode">
            <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
          </div>

          <div class="decription">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, fugit consequatur? Quos numquam exercitationem ex eum ad, cumque vel. Excepturi, beatae quo nesciunt voluptas architecto reprehenderit voluptatem dignissimos nobis libero magni voluptatibus expedita quam distinctio temporibus doloremque consectetur aut numquam corrupti blanditiis voluptate. Id aut facilis autem repellendus non atque officia, illo iusto enim maxime error amet ab ut itaque fugit nemo temporibus in sequi facere recusandae qui velit? Unde tempora et, minima quos aperiam, quo in enim maiores soluta sunt id eveniet quidem eos, laudantium tenetur delectus repudiandae expedita labore. Ut dicta eveniet nulla iusto tenetur possimus repellat inventore provident aliquid ipsa culpa perspiciatis expedita atque consequatur totam repudiandae blanditiis exercitationem, minima rerum fugiat? Sint soluta, nulla aperiam quo debitis, deleniti non nobis, veniam repellendus accusantium hic similique tenetur dignissimos odit? Natus facere, doloremque consequuntur amet impedit architecto quasi accusantium. Doloribus vel repudiandae maiores sapiente debitis placeat aut eveniet porro, voluptatum doloremque quisquam mollitia aspernatur saepe, explicabo, quidem asperiores quaerat quae dicta assumenda! Ex perspiciatis voluptate necessitatibus beatae optio illo, reiciendis eum fugit laudantium debitis ipsa. Incidunt voluptatibus culpa, maiores voluptas doloribus quas! Praesentium voluptatem, dicta quae, a explicabo sint cumque corporis, nisi voluptate quis cupiditate quia voluptas iusto consequuntur accusantium numquam expedita laborum voluptates nobis facilis perspiciatis optio qui! Harum, qui. Mollitia expedita iusto ipsa ad veritatis perspiciatis cumque corrupti hic omnis non enim doloribus, vitae, optio perferendis consequuntur adipisci maiores labore ipsam praesentium ducimus officia, illum autem eaque quae. Non nulla sunt eveniet sit velit, facilis veritatis esse nihil excepturi vitae dolorum suscipit, totam nesciunt dolore minima consectetur adipisci aliquam impedit odit rerum, sed tenetur perspiciatis at? Fugiat ea sit at, perspiciatis in voluptate distinctio earum explicabo beatae error excepturi consectetur, a eum itaque labore iusto illum placeat dicta ex possimus molestias! Explicabo in recusandae quibusdam provident delectus facere sit architecto harum accusamus corporis necessitatibus molestias quis ullam saepe deserunt tempora praesentium sed ipsum, est numquam omnis voluptatibus ut! Quis labore amet eaque voluptatem iste impedit magnam, maxime optio. Facere quisquam a molestias, libero voluptate cumque! Suscipit, rerum sequi amet, atque ea neque, possimus repudiandae error ipsum nesciunt doloremque tenetur vel illum eligendi eos corporis? Ratione, quo omnis modi reprehenderit quod, provident aliquam iusto facere dolorem, perferendis amet. Nemo odio, quaerat labore vitae accusamus dolor temporibus dolorum consequuntur consequatur culpa quasi sequi natus et commodi quam doloribus fugit amet vero corrupti repellendus error voluptates, accusantium eaque repudiandae?
            </p>
          </div>

      </div>
  </div>
</template>

<script>


export default {
  name: 'Home',

  data() {
    return {
      reading_mode:false
    }
  },

  methods:{
    enable_reading_mode(){
      this.reading_mode=!this.reading_mode
    }
  }

}
</script>

