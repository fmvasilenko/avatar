import createElement from '../utils/createElement';
import { IA } from './types';

const a: IA = (props, children) => {
  const root = createElement('a', props, children);

  if (props) {
    const {
      download,
      href,
      hreflang,
      ping,
      referrerpolicy,
      rel,
      target,
      type,
    } = props;

    if (download) root.setAttribute('download', typeof download === 'string' ? download : 'true');
    if (href) root.setAttribute('href', href);
    if (hreflang) root.setAttribute('hreflang', hreflang);
    if (ping) root.setAttribute('ping', ping);
    if (referrerpolicy) root.setAttribute('referrerpolicy', referrerpolicy);
    if (rel) root.setAttribute('rel', rel);
    if (target) root.setAttribute('target', target);
    if (type) root.setAttribute('type', type);
  }

  return root;
};

export default a;
