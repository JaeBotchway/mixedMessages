let randomMessage = [
     'A man’s got to do what a man’s got to do. A woman must do what he can’t.— Rhonda Hansome',
     'A woman is like a tea bag — you never know how strong she is until she gets in hot water. — Eleanor Roosevelt',
   'I can’t think of any better representation of beauty than someone who is unafraid to be herself. — Emma Stone',
   'I’m not afraid of storms, for I’m learning to sail my ship. — Louisa May Alcott',
   'A strong woman understands that the gifts such as logic, decisiveness, and strength are just as feminine as intuition and emotional connection. She values and uses all of her gifts. — Nancy Rathburn',
 'One is not born, but rather becomes, a woman. — Simone de Beauvoir',
 'Whatever women do they must do twice as well as men to be thought half as good. Luckily, this is not difficult. — Charlotte Whitton',
 'Power is not given to you. You have to take it. — Beyonce Knowles',
 'It took me quite a long time to develop a voice, and now that I have it, I am not going to be silent. — Madeleine Albright',
 'A woman is the full circle. Within her is the power to create, nurture, and transform. — Diane Mariechild',
'If you want something said, ask a man; if you want something done, ask a woman. — Margaret Thatcher',
'The question isn’t who’s going to let me; it’s who is going to stop me. — Ayn Rand',
'Woman must not accept; she must challenge. She must not be awed by that which has been built up around her; she must reverence that woman in her which struggles for expression. — Margaret Sanger',
'Power to me is the ability to make a change in a positive way. — Victoria Justice',
'I never dreamed about success. I worked for it. — Estée Lauder'
]



const Mesage = (arr) => {
    console.log(arr[Math.floor((Math.random()*arr.length))]);
};
Mesage(randomMessage);