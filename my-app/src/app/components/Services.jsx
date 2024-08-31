import { HomeModernIcon, DocumentTextIcon, Cog8ToothIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import yourImage from '../images/pexels-kampus-7551662.jpg';

const features = [
  {
    name: 'Cleaning',
    description:
      'Light housekeeping tasks including tidying up, dusting, and vacuuming. Laundry services are also provided.',
    icon: HomeModernIcon, // Using HomeModernIcon as a placeholder
  },
  {
    name: 'Home Management',
    description:
      'Includes arranging transportation, meal preparation, shopping for essentials, and simple household repairs.',
    icon: DocumentTextIcon, // Using DocumentTextIcon as a placeholder
  },
  {
    name: 'Activities of Daily Living',
    description:
      'Assistance with bathing, eating, dressing, mobility, transferring from bed to chair, and toileting.',
    icon: Cog8ToothIcon, // Using Cog8ToothIcon as a placeholder
  },
]

export default function Services() {
  return (
    <section id='services'>
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:max-w-none">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">Comprehensive Homemaker Services</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Supporting Your Daily Needs</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Our Homemaker services are designed to assist with routine household tasks and provide support with activities of daily living.
                  Whether you need help with cleaning, meal preparation, or personal care, our services are tailored to meet your needs.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="relative w-full h-full max-w-none">
              <Image
                alt="Homemaker services"
                src={yourImage} // Ensure the path is correct and the image is imported properly
                layout="responsive"
                width={3000}   // Increase width as needed
                height={1800}  // Increase height as needed
                className="rounded-xl shadow-xl ring-1 ring-gray-400/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
