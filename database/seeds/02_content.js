
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('content').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('content').insert([
        {originalPoster: 'brillpad', piece: 'Hacked into fb fb style', commentPoster: 'feisty', rating: 9, comment: 'bet you look even more like a lizard robot than zuck', save_id: 3},
        {originalPoster: 'tiemo', piece: 'ethical hacking for bing', commentPoster: 't)llsz', rating: 8, comment: 'but your giving yourself a backdoor', save_id: 2 },
        {originalPoster: 'frThLullz', piece: 'If ypu find an app with a easy pass generator there is probably a security issue', commentPoster: 'darkKingh', rating: 10, comment: 'the only secure thing is the $h!t i dropped in the bathroom', save_id: 6},
        {originalPoster: '906744', piece: 'I keep getting spammed from nigeria', commentPoster: 'kingFi$her', rating: 9, comment: 'the spam you get is the spam you are', save_id: 5},
        {originalPoster: 'kngo0', content: 'If crypto were horses id ride free', commentPoster: 'u_5trol', rating: 7, comment: 'but I\'m riding you LULZ', save_id: 4},
      ]);
    });
};
