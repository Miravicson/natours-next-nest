import Link from 'next/link';
import { LogoComponent } from './home-header';
import styles from './home.module.scss';

interface FooterLink {
  text: string;
  url: string;
}

interface FooterLinkGroup {
  heading: string;
  links: FooterLink[];
}

const footerLinkGroups: FooterLinkGroup[] = [
  {
    heading: 'Company',
    links: [
      {
        text: 'About',
        url: '/about',
      },
      {
        text: 'Jobs',
        url: '/jobs',
      },
      {
        text: 'Newsroom',
        url: '/newsroom',
      },
      {
        text: 'Advertising',
        url: '/advertising',
      },
      {
        text: 'Contact us',
        url: '/contact-us',
      },
    ],
  },
  {
    heading: 'Explore',
    links: [
      {
        text: 'Australia',
        url: '/explore/australia',
      },
      {
        text: 'New Zealand',
        url: '/explore/new-zealand',
      },
      {
        text: 'United States of America (USA)',
        url: '/explore/usa',
      },
      {
        text: 'Greece',
        url: '/explore/greece',
      },
      {
        text: 'Maldives',
        url: '/explore/maldives',
      },
      {
        text: 'Singapore',
        url: '/explore/singapore',
      },
      {
        text: 'See more',
        url: '/explore/all',
      },
    ],
  },
  {
    heading: 'Terms and Policies',
    links: [
      {
        text: 'Privacy Policy',
        url: '/terms/privacy-policy',
      },
      {
        text: 'Terms of use',
        url: '/terms/terms-of-use',
      },
      {
        text: 'Accessibility',
        url: '/terms/accessibility',
      },
      {
        text: 'Reward system policy',
        url: '/terms/reward-system-policy',
      },
    ],
  },
  {
    heading: 'Help',
    links: [
      {
        text: 'Support',
        url: '/help/support',
      },
      {
        text: 'Cancel your bookings',
        url: '/help/cancel-bookings',
      },
      {
        text: 'Use Coupon',
        url: '/help/use-coupon',
      },
      {
        text: 'Refund Policies',
        url: '/help/refund-policies',
      },
      {
        text: 'International Travel Documents',
        url: '/help/international-travel-documents',
      },
    ],
  },
];

function isDecorated(link: FooterLink) {
  const decoratedUrls = new Set(['/explore/all']);

  return decoratedUrls.has(link.url)
}

function FooterLinkComponent({link}: {link: FooterLink}) {
  const className = isDecorated(link) ? styles.footerDecoratedLink: '';
  return (
    <Link href={link.url} className={className}>{link.text}</Link>
  )
}

function LinkGroup({ linkGroup }: { linkGroup: FooterLinkGroup }) {
  return (
    <div className={`${styles.footerLinkGroup}`}>
      <h2>{linkGroup.heading}</h2>
      <ul>
        {linkGroup.links.map((link) => (
          <li key={link.url}>
            <FooterLinkComponent link={link} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const date = new Date().getFullYear();

  return (
    <section className={`${styles.footer}`}>
      <nav>
        <div className={`${styles.footerLogoWrapper}`}>
          <LogoComponent />
          <p>Your next goto companion for travel</p>
        </div>

        {footerLinkGroups.map((linkGroup) => (
          <LinkGroup linkGroup={linkGroup} key={linkGroup.heading} />
        ))}
      </nav>

      <div>
        <p> &copy; my Dream Place {date}</p>
      </div>
    </section>
  );
}
