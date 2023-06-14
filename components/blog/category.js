import Link from "next/link";
import Label from "@/components/ui/label";

export default function CategoryLabel({
  category,
  nomargin = false
}) {
  return (
    <div className="flex gap-3">
      <Link href={`#`}>
        <Label nomargin={nomargin} color="red">
          {category}
        </Label>
      </Link>
      {/* {categories?.length &&
        categories.slice(0).map((category, index) => (
          <Link
            href={`/category/${category.slug.current}`}
            key={index}>
            <Label nomargin={nomargin} color={category.color}>
              {category.title}
            </Label>
          </Link>
        ))} */}
    </div>
  );
}
