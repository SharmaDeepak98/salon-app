
export interface NavItem {
  label: string;
  path : string;
}
export const navItems : NavItem[]= [
  {'label': 'Home', 'path': '/'},
  {'label': 'Services', 'path': '/services'},
  {'label': 'Contact Us', 'path': '/contact'},
  {'label': 'About', 'path': '/about'},
  {'label': 'FAQs', 'path': '/faq'},
]