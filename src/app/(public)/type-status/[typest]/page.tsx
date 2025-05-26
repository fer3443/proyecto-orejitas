import { notFound, redirect } from "next/navigation";

import { getPetPost } from "@/actions";
import { PaginationComponent } from "@/components";
import { PostType } from "@/interface";

interface Props {
  params: Promise<{typest:string}>;
  searchParams: Promise<{page?:string}>
}
export default async function TypeStatusPage({params, searchParams}:Props) {
  const {typest} = await params;
  const strPage = await searchParams;

  const page = strPage ? parseInt(strPage.page || "1") : 1;
  const { data, totalPages } = await getPetPost({ page, typest: typest as PostType });
  if(data?.length === 0){
    return <div>
      <h2>No hay nada por aqui...</h2>
    </div>
  }
  if(typest !== 'ADOPTION' && typest !== 'LOST' && typest !== 'FOUND'){
    notFound();
  }

  return (
    <div>
      <h1>Hello Page Type {typest}</h1>
      <PaginationComponent totalPages={totalPages || 1}/>
    </div>
  );
}