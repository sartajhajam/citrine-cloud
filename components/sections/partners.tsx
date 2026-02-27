'use client';

export function Partners() {
  const partners = [
    {
      name: 'Advanced Optics',
      logo: 'https://firstdistribution.com/wp-content/uploads/Adance-Optics-150x125.png',
    },
    {
      name: 'Akamai',
      logo: 'https://firstdistribution.com/wp-content/uploads/Akamai-2-150x125.png',
    },
    {
      name: 'Arctera',
      logo: 'https://firstdistribution.com/wp-content/uploads/Arctera-3-150x125.png',
    },
    {
      name: 'Apache Optics',
      logo: 'https://firstdistribution.com/wp-content/uploads/ETH-Home-Page-apache.png',
    },
    {
      name: 'Arista',
      logo: 'https://firstdistribution.com/wp-content/uploads/Arista-1-150x125.png',
    },
    {
      name: 'AWS',
      logo: 'https://firstdistribution.com/wp-content/uploads/ETH-Home-Page-AWS-150x125.png',
    },
    {
      name: 'BeyondTrust',
      logo: 'https://firstdistribution.com/wp-content/uploads/Beyond-Trust-150x125.png',
    },
    {
      name: 'BitTitan',
      logo: 'https://firstdistribution.com/wp-content/uploads/BitTitan-1-150x125.png',
    },
    {
      name: 'Ubuntu (Linux Warehouse)',
      logo: 'https://firstdistribution.com/wp-content/uploads/ETH-Home-Page-Ubuntu-150x125.png',
    },
    {
      name: 'Commvault',
      logo: 'https://firstdistribution.com/wp-content/uploads/Commvault-2-150x125.png',
    },
    {
      name: 'Cohesity',
      logo: 'https://firstdistribution.com/wp-content/uploads/Cohesity-150x125.png',
    },
    {
      name: 'Cloudera',
      logo: 'https://firstdistribution.com/wp-content/uploads/Cloudera-3-150x125.png',
    },
  ];

  const scrollingPartners = [...partners, ...partners];

  return (
    <>
      <section
        id="partners"
        className="py-20 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-100" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Our Partners
            </h2>
            <p className="hidden sm:block text-sm text-slate-600 max-w-sm text-right">
              Trusted technology leaders we work with to deliver robust, modern
              solutions.
            </p>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent" />

            <div className="overflow-hidden">
              <div className="flex items-center gap-10 sm:gap-12 partners-marquee">
                {scrollingPartners.map((partner, index) => (
                  <div
                    key={`${partner.name}-${index}`}
                    className="group shrink-0 flex items-center justify-center rounded-3xl bg-white border border-slate-200/80 px-8 py-6 sm:px-10 sm:py-7 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-14 sm:h-16 w-auto object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .partners-marquee {
          display: flex;
          animation: partners-marquee 28s linear infinite;
        }

        @keyframes partners-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
}

