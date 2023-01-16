import Painting from "./Painting";

export default function PaintingList({ items }) {
	return (
		<ul>
			{items.map((item) => (
				<li key={item.id}>
					<Painting
                  imageUrl={item.url}
                  title={item.title}
                  price={item.price}
                  authorName={item.author.tag}
                  profileUrl={item.author.url}
                  quantity={item.quantity}
			      />
				</li>
			))}
		</ul>
	);
}
