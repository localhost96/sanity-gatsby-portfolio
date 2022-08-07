export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62f02afa8e24d6556dd9280c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-uvfs86vp',
                  apiId: '0f9e9c16-60c5-4a8f-8416-11f0cb6be890'
                },
                {
                  buildHookId: '62f02afaf3c82a508dad3f82',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-qp8rbqkg',
                  apiId: '87bdd71b-5446-4a56-b0d7-2ebbc6c30995'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/localhost96/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-qp8rbqkg.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
