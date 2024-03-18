const LIGHT_THEME = `
<svg width="58" height="118" viewBox="0 0 58 118" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="57" height="117" rx="8.5" fill="white"/>
<rect x="7" y="7" width="24" height="6" rx="3" fill="#809098"/>
<rect x="7" y="16" width="12" height="6" rx="3" fill="#C8D0D3"/>
<rect x="7" y="96" width="20" height="15" rx="3" fill="#C8D0D3"/>
<rect x="31" y="96" width="20" height="15" rx="3" fill="#C8D0D3"/>
<rect x="21" y="16" width="12" height="6" rx="3" fill="#C8D0D3"/>
<rect x="35" y="16" width="12" height="6" rx="3" fill="#C8D0D3"/>
<rect x="7" y="66" width="42" height="6" rx="3" fill="#809098"/>
<rect x="7" y="75" width="38" height="6" rx="3" fill="#809098"/>
<rect x="7" y="84" width="22" height="6" rx="3" fill="#809098"/>
<rect x="7" y="28" width="44" height="32" rx="3" fill="#FABF2C"/>
<rect x="0.5" y="0.5" width="57" height="117" rx="8.5" stroke="#E3E6E7"/>
</svg>
`;

const AUTO_THEME = `
<svg width="58" height="118" viewBox="0 0 58 118" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_5605_21298)">
<rect x="1" y="1" width="56" height="116" rx="8" fill="black"/>
<g clip-path="url(#clip1_5605_21298)">
<rect x="7" y="7" width="24" height="6" rx="3" fill="#AFBAC0"/>
<rect x="7" y="16" width="12" height="6" rx="3" fill="#4E5D65"/>
<rect x="7" y="96" width="20" height="15" rx="3" fill="#4E5D65"/>
<rect x="31" y="96" width="20" height="15" rx="3" fill="#4E5D65"/>
<rect x="21" y="16" width="12" height="6" rx="3" fill="#4E5D65"/>
<rect x="35" y="16" width="12" height="6" rx="3" fill="#4E5D65"/>
<rect x="7" y="66" width="42" height="6" rx="3" fill="#AFBAC0"/>
<rect x="7" y="75" width="38" height="6" rx="3" fill="#AFBAC0"/>
<rect x="7" y="84" width="22" height="6" rx="3" fill="#AFBAC0"/>
<rect x="7" y="28" width="44" height="32" rx="3" fill="#FAD475"/>
</g>
<mask id="mask0_5605_21298" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="-5" y="-1" width="52" height="155">
<path d="M24.5 51L47 -1H-4.5V154L41.5 46.5L24.5 51Z" fill="black"/>
</mask>
<g mask="url(#mask0_5605_21298)">
<rect x="1" y="1" width="56" height="116" fill="white"/>
<rect x="7" y="7" width="24" height="6" rx="3" fill="#809098"/>
<rect x="7" y="16" width="12" height="6" rx="3" fill="#C8D0D3"/>
<rect x="7" y="96" width="20" height="15" rx="3" fill="#C8D0D3"/>
<rect x="31" y="96" width="20" height="15" rx="3" fill="#C8D0D3"/>
<rect x="21" y="16" width="12" height="6" rx="3" fill="#C8D0D3"/>
<rect x="35" y="16" width="12" height="6" rx="3" fill="#C8D0D3"/>
<rect x="7" y="66" width="42" height="6" rx="3" fill="#809098"/>
<rect x="7" y="75" width="38" height="6" rx="3" fill="#809098"/>
<rect x="7" y="84" width="22" height="6" rx="3" fill="#809098"/>
<rect x="7" y="28" width="44" height="32" rx="3" fill="#FABF2C"/>
</g>
</g>
<rect x="0.5" y="0.5" width="57" height="117" rx="8.5" stroke="#E3E6E7"/>
<defs>
<clipPath id="clip0_5605_21298">
<rect x="1" y="1" width="56" height="116" rx="8" fill="white"/>
</clipPath>
<clipPath id="clip1_5605_21298">
<rect width="44" height="104" fill="white" transform="translate(7 7)"/>
</clipPath>
</defs>
</svg>

`;

const DARK_THEME = `
<svg width="58" height="118" viewBox="0 0 58 118" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="57" height="117" rx="8.5" fill="black"/>
<rect x="7" y="7" width="24" height="6" rx="3" fill="#AFBAC0"/>
<rect x="7" y="16" width="12" height="6" rx="3" fill="#4E5D65"/>
<rect x="7" y="96" width="20" height="15" rx="3" fill="#4E5D65"/>
<rect x="31" y="96" width="20" height="15" rx="3" fill="#4E5D65"/>
<rect x="21" y="16" width="12" height="6" rx="3" fill="#4E5D65"/>
<rect x="35" y="16" width="12" height="6" rx="3" fill="#4E5D65"/>
<rect x="7" y="66" width="42" height="6" rx="3" fill="#AFBAC0"/>
<rect x="7" y="75" width="38" height="6" rx="3" fill="#AFBAC0"/>
<rect x="7" y="84" width="22" height="6" rx="3" fill="#AFBAC0"/>
<rect x="7" y="28" width="44" height="32" rx="3" fill="#FABF2C"/>
<rect x="0.5" y="0.5" width="57" height="117" rx="8.5" stroke="#E3E6E7"/>
</svg>
`;

const THEME = `
<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 20V4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" />
</svg>
`;

export default {
  LIGHT_THEME,
  AUTO_THEME,
  DARK_THEME,
  THEME,
};
