import { useCarDetail } from "@/core/services/api/CarDetail/getCarDetail.api";
import { useDelCar } from "@/core/services/api/DeleteCar/DeleteCar.api";
import { formatDateOnly } from "@/core/utils/today";
import { Button } from "@heroui/button";

import { useParams } from "react-router-dom";
// const delCar = useDelCar();
const DetailPage = () => {


const delCar = useDelCar();
  const deleteCar= ()=>{
    delCar.mutate(id)
  }
  
  const { id } = useParams();
  const { data, isLoading, isError } = useCarDetail(id);
  if (isLoading) return <Button size="lg" isLoading color="default"></Button>;
  if (isError)
    return (
      <Button size="lg" color="danger">
        Error...
      </Button>
    );
  console.log(data);
  return (
    data && (
      <div className="flex flex-col items-center justify-center min-h-screen py-4 px-80">
        <div className="flex flex-col items-center relative h-full w-full min-h-[200px] rounded-xl overflow-hidden">
          <img
            src={`/public/${data.data.image}`}
            alt={data.data.name}
            className="w-full"
          />
          <div className="absolute w-full bottom-0 left-0 text-BoxBg bg-gradient-to-t bg-MainBg opacity-50 px-10 py-4 shadow-[0px_-15px_45px_40px_rgba(0,0,0,0.9)]">
            <h1 className="text-2xl font-bold">{data.data.name}</h1>
            <p className="mt-4">{data.data.title}</p>
            <p className="mt-4">Date: {formatDateOnly(data.data.date)}</p>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold mt-4">Details</h1>
          <p className="mt-4">
            {data.data.description}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
            officia nam ratione totam blanditiis dolorum, maiores doloremque
            officiis eius dolores doloribus tenetur nemo nobis placeat sit animi
            ipsum libero minima? Esse veritatis laborum at, consequatur, nihil
            ad consequuntur quam impedit dolore maiores perferendis ducimus
            eveniet? Eos ex placeat labore veniam! Porro, nemo odit eligendi
            reprehenderit, alias optio possimus eius tempore nulla adipisci quam
            dolore voluptate libero iure quidem labore. Accusamus totam impedit
            obcaecati adipisci distinctio, pariatur vel vero blanditiis. Soluta
            similique vero nemo, eveniet non dolore, vel ipsa, molestiae ad ab
            nihil doloribus doloremque nam! Molestias beatae corrupti eos
            maiores exercitationem ea temporibus. Saepe fuga maiores sint omnis
            doloremque id explicabo quis molestias aut quasi quibusdam,
            perferendis est recusandae ducimus sapiente, optio impedit
            consectetur qui? Tempora ipsum, autem molestias, architecto earum
            voluptate excepturi nisi quidem nulla labore itaque? Molestiae
            architecto ea incidunt, accusantium sapiente aliquid excepturi optio
            quibusdam debitis doloribus unde. Itaque aut recusandae fugiat odio
            facilis repudiandae consectetur obcaecati, libero maxime velit
            quaerat consequuntur amet debitis quas vitae sit reprehenderit!
            Voluptatibus cum culpa suscipit hic sit architecto dolore officia
            rem optio, est quas aperiam ducimus similique natus molestias
            accusantium quae commodi alias, veritatis pariatur! Ipsum autem,
            praesentium odit ad reiciendis magni eum suscipit, et ipsam
            officiis, corrupti quisquam ducimus architecto accusamus doloribus
            nesciunt eaque porro beatae aliquam fuga quidem aut molestiae amet?
            Corporis modi sint ipsam quo rerum ex repellat repudiandae quaerat
            sapiente magnam eius quas distinctio reprehenderit hic natus
            voluptatibus vitae amet, magni rem ducimus commodi assumenda dolorem
            porro. Mollitia non veritatis, excepturi eligendi repellat quo eaque
            dolores vero ut consectetur repudiandae temporibus suscipit deserunt
            debitis numquam deleniti saepe maiores veniam odit aliquid officia
            recusandae aspernatur error. Eaque, enim a! Praesentium ipsa laborum
            ratione asperiores aliquid voluptates explicabo. Libero aliquid
            repellendus, sunt expedita incidunt neque doloribus corporis nobis
            suscipit quasi quidem beatae nulla, sequi aut modi error temporibus,
            consequuntur culpa possimus. Delectus impedit, sit autem id eveniet,
            incidunt nisi cumque culpa dicta maiores nulla at! Adipisci, facilis
            molestiae nostrum pariatur consectetur qui quisquam asperiores,
            commodi consequuntur quasi sapiente quos odio nobis beatae possimus
            a magni, dignissimos enim obcaecati iste eos cumque voluptas ipsam
            ipsa. Ipsa a voluptas tempora? Libero recusandae at praesentium
            temporibus animi et repellendus. Velit, maxime mollitia ut quis
            placeat in unde. Earum maiores facilis eius dignissimos hic unde
            natus totam porro quisquam praesentium modi aliquam deleniti dolorum
            error temporibus, reprehenderit alias possimus omnis dolor saepe sed
            obcaecati, nemo laborum minima. Nesciunt illum alias ullam sed
            assumenda eaque dolor error pariatur deleniti perspiciatis
            laboriosam totam ab, numquam omnis cupiditate dolores corporis
            repudiandae provident velit ipsam cumque architecto fugit similique.
            Consequatur, qui maiores dolor eius itaque ipsa. Itaque facere nihil
            laborum eum aliquam maiores rem molestiae sequi magni, earum soluta
            unde eius dignissimos ut pariatur architecto maxime quo corporis
            incidunt, repudiandae ipsam deleniti saepe labore. Numquam magnam ea
            molestiae et sunt autem soluta distinctio quos ipsum earum quibusdam
            doloribus alias voluptas, eos id aperiam reprehenderit dolores
            inventore, labore corporis cupiditate. Sit quasi dolor est
            distinctio at placeat temporibus obcaecati, sint incidunt eligendi
            corrupti expedita impedit mollitia perferendis cumque eius aut atque
            recusandae ut modi quo? Sint maxime totam doloremque esse voluptates
            nostrum porro officiis iusto. Quidem aperiam dolore eligendi laborum
            quaerat hic ipsum nemo animi reiciendis quisquam neque sequi cumque,
            cupiditate maxime, nisi voluptas iusto, ab sed quia explicabo
            placeat quasi! Saepe enim, sunt iusto officiis nihil asperiores
            nesciunt voluptates consectetur incidunt. Saepe inventore unde non a
            veritatis qui, beatae nulla possimus asperiores ipsa quibusdam.
            Voluptatum, doloribus qui ea asperiores maxime perspiciatis dolorum.
            Iste voluptatum omnis quasi, cupiditate fuga, placeat, facilis
            consectetur eveniet magnam dolorem totam laudantium qui provident
            quo atque ex nam distinctio? Eum dolorem quae iure explicabo
            consectetur facilis ab molestias? Commodi et ipsa doloremque,
            eligendi consectetur beatae nostrum quas exercitationem non
            praesentium vitae quos, nisi cupiditate animi nemo est officia
            tenetur? Earum dicta unde nihil! Labore enim in quas laudantium
            ullam eligendi maxime exercitationem, eum facere nemo earum
            voluptate repudiandae, numquam adipisci optio corrupti maiores!
            Voluptatibus tempore corrupti porro esse dolorem, ut, delectus
            dignissimos deserunt sed error itaque atque maxime dolorum quis
            cupiditate labore. Dolorum doloribus fugiat doloremque, maxime
            deserunt quam commodi ipsum quos officia quidem ab eos dicta beatae.
            Dolor obcaecati nam cupiditate repudiandae sint! Laboriosam, ipsa
            distinctio quibusdam quam ex rem voluptas incidunt minus et eum nisi
            odit dolor natus maiores cumque fugiat inventore voluptate porro!
            Ipsum quia est inventore cum, beatae eligendi molestias voluptatibus
            magni autem similique velit obcaecati fugiat quos nemo molestiae,
            sed dolores earum. Dolores error, laudantium quia, rem asperiores
            sit omnis neque magni nulla sed explicabo inventore deleniti nihil
            eum. Quas aut explicabo est voluptatem officia adipisci maiores
            quasi neque reprehenderit deleniti nulla doloribus labore animi nam,
            mollitia voluptas, recusandae, harum possimus velit. Ad deserunt
            illo voluptates veritatis temporibus quo minima hic at
            exercitationem, animi autem possimus tempore soluta quibusdam esse
            illum itaque. Architecto perspiciatis dolore minima minus
            reprehenderit nisi dolor provident? Et iste culpa laudantium?
            Consequuntur perspiciatis suscipit, nam facilis id magni veritatis
            voluptate eum voluptatibus labore molestias voluptas, eligendi
            asperiores vero! Atque suscipit molestiae quam quibusdam tenetur,
            eaque nihil dicta obcaecati amet voluptates iusto deleniti rerum
            perspiciatis hic corporis voluptate consectetur tempore sint
            repellendus maxime explicabo voluptatem doloremque corrupti quis?
            Quidem deserunt officiis molestias nulla, culpa eum accusantium,
            soluta natus earum consectetur iusto dolorem nemo. Corrupti beatae
            sequi iusto, dolorem doloremque aliquid neque mollitia, fuga sunt
            tenetur aperiam magnam, pariatur exercitationem? Reiciendis sed
            magni saepe repellat ratione dolorem, quas modi odio veritatis, quos
            harum, enim vitae pariatur molestias ab recusandae ea. Amet magnam
            qui id debitis officiis molestias eaque iusto iste nisi assumenda
            est ullam labore, ut, ex aliquid! Distinctio iste animi consectetur,
            sunt non quasi hic dignissimos expedita adipisci harum sequi
            doloremque obcaecati architecto veritatis neque ad libero molestiae
            aspernatur nihil omnis quidem! A molestias in praesentium eaque,
            magni voluptatum sint esse illum iste sequi perferendis tempora nam
            laborum, reiciendis, suscipit error quisquam velit placeat officia.
            Ex sit iusto dolores, doloribus aliquid, autem reiciendis at
            assumenda facere tempora dignissimos, sequi vel? Facilis ea autem
            amet!
          </p>
        </div>
        <Button onPress={deleteCar} color="danger">
          Delete
        </Button>
      </div>
    )
  );
};

export default DetailPage;
