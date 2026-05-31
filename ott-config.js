// Single source of truth for OTT configuration
const OTT_ID = 'ott$idEXFeQTopAtWYyipyi9Y1yRT2UyYTP-jgthNkRFeC8';
const OTT_EMBED_BASE = 'https://player.number10sports.com/embed/';
function buildEmbedUrl(id) {
  return OTT_EMBED_BASE + encodeURIComponent(id);
}
