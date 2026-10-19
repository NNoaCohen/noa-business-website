import Link from "next/link";
import { ArrowUpLeft, PanelsTopLeft, PencilRuler, Sparkles } from "lucide-react";
import type { ServiceItem } from "@/types/service";
const marks=[PanelsTopLeft,Sparkles,PencilRuler];
export function ServiceCard({service,index=0}:{service:ServiceItem;index?:number}) {
 const Mark=marks[index%marks.length];
 return <article className="service-card flex h-full flex-col"><div className="service-mark"><Mark size={21}/></div><h3 className="mt-7 text-lg font-semibold">{service.title}</h3><p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{service.description}</p>{service.href&&<Link href={service.href} className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary">נדבר על זה <ArrowUpLeft size={16}/></Link>}</article>;
}
