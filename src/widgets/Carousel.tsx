import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './Carousel.m.css';

export interface CarouselProperties {
	navigation?: boolean;
}

const factory = create().children().properties<CarouselProperties>();

export const Carousel = factory(function Carousel({ children, properties, id }) {
	const { navigation = false } = properties();

	return (
		<div classes={css.root}>
			<ul classes={css.viewport}>
				{children().map((child, index) => {
					return (
						<li id={`carousel-${id}-${index}`} tabindex="0" classes={css.slide}>
							<div classes={css.snapper}></div>
							{child}
						</li>
					);
				})}
			</ul>
			{navigation && (
				<aside classes={css.navigation}>
					<ul>
						{children().map((_, index) => {
							return (
								<li classes={css.navigationItem}>
									<a
										classes={css.navigationButton}
										href={`#carousel-${id}-${index}`}
									>{`Go to slide ${index}`}</a>
								</li>
							);
						})}
					</ul>
				</aside>
			)}
		</div>
	);
});

export default Carousel;
