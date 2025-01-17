import { useEffect } from 'react';

const Disqus = ({ url, identifier }) => {
  useEffect(() => {
    if (window.DISQUS === undefined) {
      var d = document, s = d.createElement('script');
      s.src = 'https://manhwa-web-id.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    } else {
      window.DISQUS.reset({
        reload: true,
        config: function () {
          this.page.identifier = identifier;
          this.page.url = url;
        },
      });
    }
  }, [url, identifier]);

  return <div id="disqus_thread"></div>;
};

export default Disqus;
