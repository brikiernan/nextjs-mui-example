import Link from '../src/components/Link';
import MenuCss from './Menu.module.scss';

export default function Menu() {
  return (
    <>
      <ul className={MenuCss.menu}>
        <li>
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>
        </li>
        <li>
          <Link href="/products/[category]" as={`/products/some-product-category`} color="secondary">
            View Product Category's
          </Link>
        </li>
      </ul>
      {/* {style jsx example} */}
      <style jsx>{`
        ul {
          background: yellow;
          color: white;
        }
      `}</style>
    </>
  );
}
