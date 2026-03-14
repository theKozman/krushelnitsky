import ringVideo from '$lib/assets/videos/horizontal/ring.mp4';
import barVideo from '$lib/assets/videos/horizontal/backdoor-bar.mp4';
import sinCityVideo from '$lib/assets/videos/horizontal/sincity.mp4';
import millenialVideo from '$lib/assets/videos/horizontal/millenial.mp4';

import type { VideoItem } from '$lib/types';

export const videosState: VideoItem[] = [
	{
		key: 'make-love',
		type: 'horizontal',
		title: 'Make Love Not Babies',
		subtitle: 'Commercial video',
		for: 'sanja.jeweler',
		budget: '$0',
		src: ringVideo,
		gear: [
			{
				label: 'SONY A7III'
			}
		]
	},
	{
		key: 'backdoor-bar',
		type: 'horizontal',
		title: 'Make Bars Not Babies',
		subtitle: 'Commercial video',
		for: 'sanja.jeweler',
		budget: '$0',
		src: barVideo,
		gear: [
			{
				label: 'SONY A7III'
			}
		]
	},
	{
		key: 'sincity',
		type: 'horizontal',
		title: 'Make Sins Not Babies',
		subtitle: 'Commercial video',
		for: 'sanja.jeweler',
		budget: '$0',
		src: sinCityVideo,
		gear: [
			{
				label: 'SONY A7III'
			}
		]
	},
	{
		key: 'millenial',
		type: 'horizontal',
		title: 'Make Buba Not Labuba',
		subtitle: 'Commercial video',
		for: 'sanja.jeweler',
		budget: '$0',
		src: millenialVideo,
		gear: [
			{
				label: 'SONY A7III'
			}
		]
	}
];
