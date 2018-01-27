import Route from './Route'
import Layout from '@/components/Layout'

// views
import Home from '@/views/Home'
import Mago from '@/views/Mago'
import Servico from '@/views/Servico'
import Blog from '@/views/Blog'
import Contato from '@/views/Contato'

// errors
import NotFound from '@/views/NotFound'

/**
 * Rotas da aplicação.
 *
 * @type {Route[]}
 */
const routes = [
  new Route(Layout, '/').setChildren([
    new Route(Home, '', 'home'),
    new Route(Mago, 'mago', 'mago'),
    new Route(Servico, 'servicos', 'servicos'),
    new Route(Blog, 'blog', 'blog'),
    new Route(Contato, 'contato', 'contato')
  ]),
  new Route(NotFound, '*')
]

export default routes