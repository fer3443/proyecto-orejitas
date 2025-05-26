import { getPetPost } from "@/actions/pets/get-pet-post";
import { PaginationComponent, Title } from "@/components";
// import { redirect } from "next/navigation";

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export default async function FeedPage({ searchParams }: Props) {
  const strPage = await searchParams;
  const page = strPage ? parseInt(strPage.page || "1") : 1;
  const { data, totalPages } = await getPetPost({ page });
  // console.log({data})
  // if(data?.length === 0) redirect('/feed')
  return (
    <div>
      <Title
      title="Bienvenidos a Orejitas"
      subtitle="El sitio donde ayudamos a nuestros amiguitos de 4 patas"
      />
      <PaginationComponent totalPages={totalPages || 1}/>
    </div>
  );
}
