import { NgModule } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PaginatorModule } from 'primeng/paginator';
import { TooltipModule } from 'primeng/tooltip';
import { CheckboxModule } from 'primeng/checkbox';
import { TabMenuModule } from 'primeng/tabmenu';
import { CardModule } from 'primeng/card';
import { DragDropModule } from 'primeng/dragdrop';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { SplitButtonModule } from 'primeng/splitbutton';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ToolbarModule } from 'primeng/toolbar';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ListboxModule } from 'primeng/listbox';
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { ProgressBarModule } from 'primeng/progressbar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { BlockUIModule } from 'primeng/blockui';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { MenuModule } from 'primeng/menu';
import { MultiSelectModule } from 'primeng/multiselect';
import { MenubarModule } from 'primeng/menubar';
import { SlideMenuModule } from 'primeng/slidemenu';
import { PickListModule } from 'primeng/picklist';
import { InputTextModule } from 'primeng/inputtext';
import { SpinnerModule } from 'primeng/spinner';
import {KeyFilterModule} from 'primeng/keyfilter';
import {SelectButtonModule} from 'primeng/selectbutton';

@NgModule({
  exports: [
    InputSwitchModule,
    RadioButtonModule,
    ButtonModule,
    CalendarModule,
    DialogModule,
    MultiSelectModule,
    MenubarModule,
    PickListModule,
    SlideMenuModule,
    MenuModule,
    ToastModule,
    ConfirmDialogModule,
    TableModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule,
    TabMenuModule,
    CardModule,
    DragDropModule,
    SplitButtonModule,
    MessagesModule,
    MessageModule,
    ToolbarModule,
    ScrollPanelModule,
    TieredMenuModule,
    ContextMenuModule,
    ListboxModule,
    DataViewModule,
    PanelModule,
    PaginatorModule,
    OverlayPanelModule,
    ProgressBarModule,
    BlockUIModule,
    CheckboxModule,
    InputTextModule,
    SpinnerModule,
    KeyFilterModule,
    SelectButtonModule,
    ProgressSpinnerModule
  ]
})
export class PrimengModule { }
