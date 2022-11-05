import classes from "./post-item.module.css";
import Image from "next/image";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function PostItem(props) {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  const { title, image, excerpt, date, slug } = props.post;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;
  return (
    <>
      <li data-aos="fade-up" className={classes.post}>
        <Link href={linkPath}>
          <a>
            <div className={classes.image}>
              <Image
                src={imagePath}
                alt={title}
                width={300}
                height={200}
                layout="responsive"
              />
            </div>
            <div className={classes.content}>
              <h3>{title}</h3>
              <time>{formattedDate}</time>
              <p>{excerpt}</p>
            </div>
          </a>
        </Link>
      </li>
    </>
  );
}

export default PostItem;
