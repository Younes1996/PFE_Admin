
import { Map1Component } from './views/maps/map1/map1.component';
import { ModalsComponent } from './views/modals/modals.component';
import { BasicTableComponent } from './views/tables/basic-table/basic-table.component';
import { Profile1Component } from './views/profile/profile1/profile1.component';
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './views/errors/not-found/not-found.component';
import { Dashboard1Component } from './views/dashboards/dashboard1/dashboard1.component';
import { EnginComponent } from './views/admin/engin/engin.component';
import { ClientComponent } from './views/admin/client/client.component';
import { PersonnelComponent } from './views/admin/personnel/personnel.component';
import {ProduitComponent} from './views/admin/produit/produit.component';
import {TarifComponent} from './views/admin/tarif/tarif.component';
import {CommandeComponent} from './views/admin/commande/commande.component';


const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboards/v1' },
  { path: 'dashboards', children:
    [
      { path: 'v1', component: Dashboard1Component },
    ]
  },
  { path: 'profiles', children:
    [
      { path: 'profile1', component: Profile1Component },
    ]
  },
  { path: 'admin', children:
  [
    { path: 'personnel', component: PersonnelComponent },
  ]
},
  { path: 'admin', children:
        [
          { path: 'commande', component:CommandeComponent},
        ]
  },
    { path: 'admin', children:
            [
                { path: 'produit', component:ProduitComponent},
            ]
    },
    { path: 'admin', children:
            [
                { path: 'tarif', component:TarifComponent},
            ]
    },
{ path: 'admin', children:
[
  { path: 'engin', component: EnginComponent },
]
},
{ path: 'admin', children:
[
  { path: 'client', component: ClientComponent },
]
},
  { path: 'tables', children:
    [
      { path: 'table1', component: BasicTableComponent },
    ]
  },
  { path: 'maps', children:
    [
      { path: 'map1', component: Map1Component},
    ]
  },

  { path: 'modals', component: ModalsComponent},
  { path: '**', component: NotFoundComponent },

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
